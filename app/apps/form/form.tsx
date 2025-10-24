import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
 Field,
 FieldGroup,
 FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

export function Form({ className, ...props }: React.ComponentProps<"div">) {
 return (
  <div className={cn("flex flex-col gap-6 mx-auto", className)} {...props}>
   <Card className="overflow-hidden p-0 ">
    <CardContent className="flex flex-col md:flex-row p-0 bg-pink-100">

     {/* LEFT SIDE (Form) */}
     <div className="w-full md:w-3/5 p-6 md:p-10">
      <form>
       <FieldGroup>
        <Field>
         <FieldLabel htmlFor="agency-name" className="font-roboto-condensed text-md">Agency name</FieldLabel>
         <Input id="agency-name" type="text" placeholder="Company name *" required className="bg-white" />
        </Field>

        <Field>
         <FieldLabel htmlFor="website" className="font-roboto-condensed text-md">Agency website</FieldLabel>
         <Input id="website" type="text" placeholder="Website URL *" required className="bg-white" />
        </Field>

        <Field className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <Field>
          <FieldLabel htmlFor="email" className="font-roboto-condensed text-md">Email address</FieldLabel>
          <Input id="email" type="email" placeholder="Your Email Address *" required className="bg-white" />
         </Field>

         <Field>
          <FieldLabel htmlFor="phone" className="font-roboto-condensed text-md">Phone</FieldLabel>
          <Input id="phone" type="tel" placeholder="Your Phone Number *" required className="bg-white" />
         </Field>
        </Field>

        <Field>
         <FieldLabel className="font-roboto-condensed text-md">How did you find us?</FieldLabel>
         <Select>
          <SelectTrigger className="bg-white">
           <SelectValue placeholder="Please select an option" />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="search-engine">Search Engine</SelectItem>
           <SelectItem value="social-media">Social Media (e.g. Facebook, Instagram)</SelectItem>
           <SelectItem value="friend">Friend or Colleague</SelectItem>
           <SelectItem value="adv">Online Advertisement</SelectItem>
           <SelectItem value="event">Event or Conference</SelectItem>
          </SelectContent>
         </Select>
        </Field>

        <Field>
         <Button
          type="submit"
          className="btn-fill gradient-main px-8 py-3 rounded-full  text-white hover:opacity-90 transition-opacity text-sm mt-6"
         >
          Submit
         </Button>
        </Field>
       </FieldGroup>
      </form>
     </div>

     {/* RIGHT SIDE (Image) */}
     <div className="w-full md:w-2/5 flex items-center justify-center  p-4 ">
      {/* Image Container */}
      <div className="relative w-[350px] h-[450px] rounded-xl overflow-hidden ">
       <Image
        src="/app-form.png"
        alt="Form Side Image"
        fill
        className="object-cover"
       />
      </div>
     </div>



    </CardContent>
   </Card>
  </div>
 )
}
