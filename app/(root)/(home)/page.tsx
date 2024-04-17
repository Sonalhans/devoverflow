import HomeFilters from "@/components/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";

import Link from "next/link";
const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: { _id: "1", name: "John Doe", picture: "johndoe.png" },
    upvotes: 1000034567,
    views: 100,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: { _id: "1", name: "John Doe", picture: "johndoe.png" },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000z"),
  },
  {
    _id: "3",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: { _id: "1", name: "John Doe", picture: "johndoe.png" },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000z"),
  },
  {
    _id: "4",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: { _id: "1", name: "John Doe", picture: "johndoe.png" },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000z"),
  },
];
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className=" primary-gradient min-h-[46px]  px-4 py-3 !text-light-900">
            Ask Questions
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="  Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved!💡"
            link="/ask-question"
            linkTitle="Ask Questions"
          />
        )}
      </div>
    </>
  );
}
