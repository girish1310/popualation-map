import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(request: NextRequest, params: { id: number }) {
  // fetch data from db
  if (params.id > 10)
    return NextResponse.json({ error: "user not found!!" }, { status: 404 });
  return NextResponse.json([{ id: 1, name: "mosh" }]);
}

export async function PUT(request: NextRequest, params: { id: number }) {
  const body = await request.json();
  // bad request - 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  // not found - 404
  if (params.id > 10)
    return NextResponse.json({ error: "user not found!!" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}
export async function DELETE(request: NextRequest, params: { id: number }) {
  if (params.id > 10)
    return NextResponse.json({ error: "User Not found" }, { status: 404 });

  return NextResponse.json({});
}
