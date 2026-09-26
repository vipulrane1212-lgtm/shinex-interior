import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log payload to server stdout for observability
    console.log('[SHINEX_ESTIMATE_LEAD_LOGGED]:', {
      timestamp: new Date().toISOString(),
      lead: {
        name: data.name,
        phone: data.phone,
        city: data.city,
        project_type: data.project_type,
        bhk: data.bhk,
        estimate_range: `₹ ${data.estimate_min} - ₹ ${data.estimate_max}`,
        finish: data.finish,
        bundle: data.bundle,
        civil_addons: data.civil_addons,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Estimate lead logged successfully',
      referenceId: `SX-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error('Error logging estimate lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead payload' },
      { status: 400 }
    );
  }
}
