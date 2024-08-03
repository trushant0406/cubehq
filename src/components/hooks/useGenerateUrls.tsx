import { useState, useEffect } from "react";

const useGenerateUrls = (
  limit: number,
  width: number,
  height: number,
  isCustomerSelected: number | null
) => {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: number | undefined;
    const fetchImages = async () => {
      try {
        const newUrls = Array.from(
          { length: limit },
          (_, index) =>
            `https://picsum.photos/${width}/${height}?random=${
              Date.now() + index
            }`
        );
        // Function to load a single image and return a promise
        const loadImage = (url: string): Promise<void> => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => reject(`Failed to load image: ${url}`);
          });
        };

        // Function to load all images and wait for them to load
        const loadAllImages = async (urls: string[]): Promise<void[]> => {
          return Promise.all(urls.map((url) => loadImage(url)));
        };
        setLoading(true);
        loadAllImages(newUrls).then(() => {
          setUrls(newUrls);
          setLoading(false);
        });
      } catch (err) {
        setError("Failed to generate URLs");
        setLoading(false);
      }
    };

    if (isCustomerSelected) {
      fetchImages(); // Initial call
      intervalId = setInterval(fetchImages, 10000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [limit, width, height, isCustomerSelected]);

  return { urls, loading, error };
};

export default useGenerateUrls;
