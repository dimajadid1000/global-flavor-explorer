
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Mail, User } from "lucide-react";

const ContactSchema = z.object({
  name: z.string().min(2, { message: "Le nom est requis." }),
  email: z.string().email({ message: "L'email est invalide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

type ContactFormType = z.infer<typeof ContactSchema>;

export default function Contact() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormType) => {
    // Ici, on pourrait envoyer les données à un backend/Supabase si connecté.
    toast({
      title: "Votre message a bien été envoyé !",
      description: "Merci pour votre prise de contact. Nous reviendrons vers vous rapidement.",
    });
    form.reset();
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-8">Pour toute question, suggestion ou collaboration, remplissez ce formulaire&nbsp;:</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nom
                  </span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="votre@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Votre message" rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-6">
            Envoyer
          </Button>
        </form>
      </Form>
    </div>
  );
}
