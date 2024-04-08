"use client";

import { Bookmark, BookmarkCheck, Share } from "lucide-react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

function BookmarkButton({ property }) {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  console.log(userId);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const fetchBookmarks = async () => {
      if (!userId) {
        return;
      }

      try {
        const response = await fetch("/api/bookmarks/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ propertyId: property?._id }),
        });

        if (response.ok) {
          const { isBookmarked } = await response.json();
          setIsBookmarked(isBookmarked);
        } else {
          const data = await response.json();
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    };

    fetchBookmarks();
  }, [property?._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("Please sign in to bookmark the property");
      return;
    }

    try {
      const response = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ propertyId: property?._id }),
      });

      if (response.ok) {
        const { message, isBookmarked } = await response.json();
        setIsBookmarked(isBookmarked);
        toast.success(message);
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isBookmarked ? (
        <button
          aria-label="Remove bookmark"
          className="rounded-xl border bg-neutral-200 p-2"
          onClick={handleClick}
        >
          <BookmarkCheck className="text-primary-500" />
        </button>
      ) : (
        <button
          className="rounded-xl border bg-neutral-200 p-2"
          onClick={handleClick}
          aria-label="Bookmark"
        >
          <Bookmark />
        </button>
      )}
    </div>
  );
}

export default BookmarkButton;
