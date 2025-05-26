"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Name must be 50 characters or less."}),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message must be 1000 characters or less."}),
});

export interface ContactFormState {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success?: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState | undefined, // Can be undefined initially
  data: FormData
): Promise<ContactFormState> {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay

  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    const formIssues: string[] = [];

    parsed.error.issues.forEach(issue => {
      if (issue.path.length > 0) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      formIssues.push(issue.message);
    });
    
    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>, // Keep submitted values
      issues: formIssues,
      success: false,
    };
  }

  // In a real application, you would process the data here:
  // e.g., send an email, save to a database
  console.log("Contact form submitted successfully:", parsed.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
    fields: {}, // Clear fields on success
    issues: []
  };
}
