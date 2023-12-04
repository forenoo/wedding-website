import connectMongoDB from "../../../libs/mongodb";
import Comment from "../../../models/comment";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { user, comment } = await request.json();
  await connectMongoDB();
  await Comment.create({ user, comment });
  return NextResponse.json({ message: "Comment created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const comments = await Comment.find();
  return NextResponse.json({ comments });
}
