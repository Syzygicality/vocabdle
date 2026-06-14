import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createPostSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
});

export async function GET() {
    const supabase = createClient(await cookies());
    const { data: posts } = await supabase.from("posts").select();
    return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
    const supabase = createClient(await cookies());
    const body = await request.json();
}
