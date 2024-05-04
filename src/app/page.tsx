import Image from "next/image";
import { mockImagesURL } from "../lib/mock-images";

const mockImages = mockImagesURL.map((url, id) => ({
  id,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id}>
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              className="h-60 w-full rounded-lg object-cover"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
