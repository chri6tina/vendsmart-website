import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '8338344291:AAF-Fyv63CL2eM_5XwBGVSbXF-gjNw6EKTU';
const TELEGRAM_CHAT_ID = '6583207981';

export async function POST(request) {
    try {
        const body = await request.json();

        // Explicitly extract all possible fields
        const name = body.name || 'N/A';
        const email = body.email || 'N/A';
        const phone = body.phone || 'N/A';
        const company = body.company || 'N/A';
        const employees = body.employees || 'N/A';
        const serviceType = body.serviceType || 'N/A';
        const zipcode = body.zipcode || 'N/A';
        const source = body.source || body.location || 'N/A';
        const message = body.message || 'No additional message provided.';

        // Construct a beautiful Telegram message
        const telegramMessage = `
🚨 <b>NEW VENDSMART LEAD!</b> 🚨

👤 <b>Name:</b> ${name}
🏢 <b>Company:</b> ${company}
👥 <b>Employees:</b> ${employees}
✉️ <b>Email:</b> ${email}
📱 <b>Phone:</b> ${phone}
📍 <b>Zip/Location:</b> ${zipcode}
⚙️ <b>Service Needed:</b> ${serviceType}
🌐 <b>Source:</b> ${source}

💬 <b>Message:</b>
<i>${message}</i>
    `.trim();

        // Fire the request to Telegram API
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Telegram API Error:", errorData);
            return NextResponse.json({ error: 'Failed to notify via Telegram.', details: errorData }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error('API Contact Error:', error);
        return NextResponse.json(
            { error: 'Internal server error while processing contact form.' },
            { status: 500 }
        );
    }
}
