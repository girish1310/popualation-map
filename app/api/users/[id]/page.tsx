import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, params: { id: number }) {
  // fetch data from db
  if (params.id > 10)
    return NextResponse.json({ error: "user not found!!" }, { status: 404 });
  return NextResponse.json([{ id: 1, name: "mosh" }]);
}

export async function PUT(request: NextRequest, params: { id: number }) {
  const body = await request.json();
  // bad request - 400
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  // not found - 404
  if (params.id > 10)
    return NextResponse.json({ error: "user not found!!" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}
