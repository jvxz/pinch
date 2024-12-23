import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDeviceStore } from "@/lib/store/device-type";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const aspectRatioSchema = z.object({
  width: z.string().min(1),
  height: z.string().min(1),
});

type FormValues = z.infer<typeof aspectRatioSchema>;

export default function CustomDevices() {
  const { setDevice, device } = useDeviceStore();
  const form = useForm<FormValues>({
    resolver: zodResolver(aspectRatioSchema),
  });

  function onSubmit(data: FormValues) {
    if (data.width === device?.width && data.height === device?.height) return;

    setDevice({
      model: "Custom",
      width: data.width,
      height: data.height,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="motion-preset-fade-sm flex h-full flex-col gap-2"
      >
        <div className="flex items-center gap-2">
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <Input
                placeholder="Width"
                style={{
                  border: form.formState.errors.width
                    ? "1px solid hsl(var(--destructive))"
                    : "",
                }}
                {...field}
              />
            )}
          />
          <X className="size-8" />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <Input
                placeholder="Height"
                style={{
                  border: form.formState.errors.height
                    ? "1px solid hsl(var(--destructive))"
                    : "",
                }}
                {...field}
              />
            )}
          />
        </div>
        <Button type="submit">Set aspect ratio</Button>
      </form>
    </Form>
  );
}
