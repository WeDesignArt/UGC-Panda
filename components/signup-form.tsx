import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <main className="flex items-center justify-center min-h-screen w-full p-6 lg:p-0 bg-black">
      <section className="relative container max-w-3xl rounded-2xl bg-white p-6 lg:p-10 text-center shadow-lg overflow-hidden">
        {/* Background Panda Logo  */}
        <Image
          src="/logo-panda-borderless.svg"
          alt="bg-panda"
          width={500}
          height={500}
          className="absolute -right-10 -bottom-10 rotate-12 opacity-10 pointer-events-none w-64 lg:w-80 z-0"
        />

        {/* Form Content */}
        <div
          className={cn(
            "relative z-10 mx-auto w-full max-w-md flex flex-col gap-6",
            className
          )}
          {...props}
        >
          <form className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/login-panada.svg"
                alt="logo"
                width={236}
                height={296}
                className="h-auto w-40 md:w-52"
              />
            </div>

            <h1 className="text-[40px] font-roboto font-bold">
              Create Your Account
            </h1>

            {/* Full Name */}
            <div className="rounded-full p-[1px] bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              <div className="flex items-center h-10 rounded-full bg-white px-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            {/* Brand Name */}
            <div className="rounded-full p-[1px] bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              <div className="flex items-center h-10 rounded-full bg-white px-3">
                <input
                  type="text"
                  placeholder="Brand Name"
                  required
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="rounded-full p-[1px] bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              <div className="flex items-center h-10 rounded-full bg-white px-3">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="rounded-full p-[1px] bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              <div className="flex items-center h-10 rounded-full bg-white px-3">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="items-center gap-3">
              <Button className="px-5 py-2 rounded-full w-full text-white bg-gradient-to-b from-[#7928CA] to-[#FF0080] hover:opacity-90 transition text-sm">
                Sign Up
              </Button>
            </div>

            {/* Divider */}
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                Or
              </span>
            </div>

            {/* Google */}
            <div className="rounded-full p-[1px] bg-gradient-to-b from-[#7928CA] to-[#FF0080]">
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full w-full px-4 py-2 
                  bg-white text-black hover:bg-gradient-to-b hover:from-[#7928CA] hover:to-[#FF0080] 
                  hover:text-white transition text-sm"
              >
                <Image
                  src="/google-icon.png"
                  alt="g-icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 text-center">Sign up with Google</span>
              </Button>
            </div>
          </form>

          {/* Privacy Policy */}
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By signing up, you agree to our <a href="#">Terms</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </div>

          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            Already Have an Account <a href="/login">Log In</a>
          </div>
        </div>
      </section>
    </main>
  );
}
