"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useCallback, useMemo } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, CheckCircle, AlertCircle } from "lucide-react";

const initialState: ContactFormState = {
  message: "",
  success: undefined,
  fields: {},
  issues: []
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  const getFieldError = useCallback((fieldName: string) => {
    if (!state || !state.issues || state.success) return null;
    const fieldErrors = state.issues.filter(issue => 
      state.fields && Object.keys(state.fields).includes(fieldName) && issue.toLowerCase().includes(fieldName)
    );
    return fieldErrors.length > 0 ? fieldErrors[0] : null;
  }, [state]);

  const renderErrorAlert = useMemo(() => {
    if (!state?.message || state.success || !state.issues || state.issues.length === 0) return null;
    
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {state.message}
          <ul className="list-disc list-inside mt-2">
            {state.issues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>
    );
  }, [state]);

  const renderSuccessAlert = useMemo(() => {
    if (!state?.success) return null;
    
    return (
      <Alert variant="default" className="mb-6 bg-green-50 border-green-300 dark:bg-green-900/50 dark:border-green-700">
        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
        <AlertTitle className="text-green-700 dark:text-green-300">Success!</AlertTitle>
        <AlertDescription className="text-green-600 dark:text-green-400">
          {state.message}
        </AlertDescription>
      </Alert>
    );
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 max-w-xl mx-auto">
      {renderErrorAlert}
      {renderSuccessAlert}
      
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
        <Input 
          id="name" 
          name="name" 
          type="text" 
          placeholder="Your Name" 
          required 
          defaultValue={state?.fields?.name}
          className={getFieldError('name') ? 'border-destructive' : ''}
          aria-describedby="name-error"
        />
        {getFieldError('name') && <p id="name-error" className="text-sm text-destructive">{getFieldError('name')}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="you@example.com" 
          required 
          defaultValue={state?.fields?.email}
          className={getFieldError('email') ? 'border-destructive' : ''}
          aria-describedby="email-error"
        />
        {getFieldError('email') && <p id="email-error" className="text-sm text-destructive">{getFieldError('email')}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground/90">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Your message here..."
          required
          defaultValue={state?.fields?.message}
          className={getFieldError('message') ? 'border-destructive' : ''}
          aria-describedby="message-error"
        />
        {getFieldError('message') && <p id="message-error" className="text-sm text-destructive">{getFieldError('message')}</p>}
      </div>
      
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
