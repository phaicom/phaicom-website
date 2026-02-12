import MdiEmail from "~icons/mdi/email";
import MdiMapMarkerMultipleOutline from "~icons/mdi/map-marker-multiple-outline";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Get In Touch</h2>

      <p className="mb-8 leading-relaxed text-gray-400">
        Have a project in mind or just want to connect? Feel free to reach out and I'll get back to
        you soon.
      </p>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <MdiEmail className="h-6 w-6 text-yellow-500" />
          <span>hello@johndoe.com</span>
        </div>

        <div className="flex items-center gap-4">
          <MdiMapMarkerMultipleOutline className="h-6 w-6 text-yellow-500" />
          <span>San Francisco, CA</span>
        </div>
      </div>
    </div>
  );
}
