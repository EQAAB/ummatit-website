import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "../courseData";
import { CourseDetail } from "./CourseDetail";

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ id: String(course.id) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));
  return {
    title: course ? `${course.title} | Ummat IT House` : "Course | Ummat IT House",
    description: course?.description,
  };
}

export default async function CourseDetailPage({ params }: Params) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));

  if (!course) notFound();

  const related = [
    ...courses.filter((c) => c.id !== course.id && c.category === course.category),
    ...courses.filter((c) => c.id !== course.id && c.category !== course.category),
  ].slice(0, 4);

  return <CourseDetail course={course} related={related} />;
}
