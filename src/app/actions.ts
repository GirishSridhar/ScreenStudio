"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
  message?: string | null;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }
  
  // Here you would typically send an email or save to a database.
  // For this demo, we'll just log it to the console.
  console.log("New contact form submission:");
  console.log(validatedFields.data);

  return {
    message: "Thank you for your message! We'll get back to you soon.",
    errors: null,
  };
}
