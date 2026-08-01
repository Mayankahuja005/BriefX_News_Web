import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Store from "../store/Store.js";
import { generateNewsSummary } from "../service/groq";
import { getOfflineArticle } from "../store/offlineStore.js";

function NewsDetail() {
  const {
    bookmarks,
    addBookmark,
    removeBookmark,
    comments,
    addComment,
    removeComment,
    theme,
  } = Store();

  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const isBooked = bookmarks.some(
    (booked) => booked.id === newsDetail?.id
  );

  const isComment = comments.some(
    (booked) => booked.id === newsDetail?.id
  );

  const { lang } = Store();

  const [aiSummary, setAiSummary] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const { id, category } = useParams();

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);

        if (!navigator.onLine) {
          const article = await getOfflineArticle(category, id);
          setNewsDetail(article);
          return;
        }

        const response = await fetch(
          `https://api.currentsapi.services/v1/latest-news?language=${lang}&country=IN&page_size=20`,
          {
            headers: {
              Authorization:
                import.meta.env.VITE_CURRENTS_API_KEY,
            },
          }
        );

        const result = await response.json();

        const article = result.news.find(
          (item) => item.id === id
        );

        setNewsDetail(article);
      } catch (error) {
        console.log("Error in fetching details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id, lang, category]);

  const generateSummary = async () => {
    try {
      setAiLoading(true);

      const result = await generateNewsSummary(
        newsDetail.title,
        newsDetail.description
      );

      setAiSummary(result);
    } catch (error) {
      console.log(error);
    } finally {
      setAiLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="animate-pulse text-2xl font-bold sm:text-3xl">
          Loading...
        </p>
      </div>
    );
  }

  if (!newsDetail) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-2xl font-bold text-red-500 sm:text-3xl">
          News Not Found
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">

      <div className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:mb-12 sm:text-5xl lg:text-6xl">
        📑 News Details
      </div>

      <img
        src={newsDetail?.image}
        alt="News_Image"
        className="h-56 w-full rounded-2xl object-cover shadow-xl transition duration-500 hover:scale-[1.02] sm:h-80 lg:h-\[450px]"
      />

      <h1 className="mt-6 text-2xl font-extrabold leading-tight sm:mt-8 sm:text-4xl lg:text-5xl">
        {newsDetail?.title}
      </h1>

      <p
        className={`mt-6 text-base leading-8 sm:text-lg sm:leading-9 ${
          theme==="light"
            ? "text-black"
            : "text-white"
        }`}
      >
        {newsDetail?.description}
      </p>

      <div className="mt-8 flex flex-col gap-4">

        <p className="w-full rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 sm:w-fit">
          👤 {newsDetail?.author || "Unknown Author"}
        </p>

        <p
          className={`w-full rounded-full px-5 py-3 text-sm font-semibold sm:w-fit ${
            theme
              ? "border border-gray-600 bg-gray-800 text-gray-200"
              : "border border-gray-300 bg-gray-100 text-gray-700"
          }`}
        >
          📅 {newsDetail?.published}
        </p>

      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">

        <button
          onClick={() =>
            isBooked
              ? removeBookmark(newsDetail.id)
              : addBookmark(newsDetail)
          }
          className="w-full rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-white transition hover:bg-yellow-600 sm:w-auto"
        >
          {isBooked ? "Bookmarked 🔖" : "Bookmark 📑"}
        </button>

        <button
          onClick={() =>
            isComment
              ? removeComment(newsDetail.id)
              : addComment(newsDetail)
          }
          className="w-full rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-700 sm:w-auto"
        >
          {isComment
            ? "💬 Delete Comment"
            : "💬 Comment"}
        </button>

      </div>

      <button
        onClick={generateSummary}
        disabled={aiLoading}
        className="mt-8 w-full rounded-xl bg-purple-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-purple-700 sm:w-fit"
      >
        {aiLoading
          ? "Generating..."
          : "🤖 AI Summary"}
      </button>
            {aiSummary && (
        <div
          className="relative mt-10 overflow-hidden rounded-3xl bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative p-5 sm:p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-pink-500 text-2xl shadow-lg sm:h-14 sm:w-14 sm:text-3xl">
                🤖
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-white sm:text-3xl">
                  AI News Summary
                </h2>

                <p className="text-xs text-gray-200 sm:text-sm">
                  Smart explanation generated using AI
                </p>
              </div>
            </div>

            <div
              className={`rounded-2xl p-5 shadow-xl backdrop-blur-md sm:p-7 ${
                theme
                  ? "bg-gray-900/90"
                  : "bg-white/95"
              }`}
            >
              <p
                className={`whitespace-pre-wrap text-sm leading-7 sm:text-base lg:text-lg lg:leading-9 ${
                  theme
                    ? "text-gray-100"
                    : "text-gray-800"
                }`}
              >
                {aiSummary}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <a
          href={newsDetail.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl bg-red-500 px-6 py-3 text-center text-base font-semibold text-white shadow-lg transition hover:bg-red-700 hover:shadow-xl sm:inline-block sm:w-auto sm:text-lg"
        >
          📰 Read Full Article
        </a>
      </div>

      <Link
        to="/"
        className="mt-6 inline-block w-full rounded-xl bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg sm:w-auto sm:text-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default NewsDetail;