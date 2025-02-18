import { NextResponse } from 'next/server';

// Constants
import { CHRONOLOGY_FILE_URL } from "@/constants/website";

export async function GET() {
  const fileUrl = CHRONOLOGY_FILE_URL;

  try {
    // Fetch the file from the blob storage
    const response = await fetch(fileUrl);

    if (!response.ok) {
      return NextResponse.error();
    }

    // Get the file's content type
    const contentType = response.headers.get('content-type') || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    // Get the file's content as a stream
    const fileStream = response.body;

    // Create a new response with the file stream and headers
    const newResponse = new NextResponse(fileStream, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'attachment; filename="ares-example-chronology.docx"',
      },
    });

    return newResponse;
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
