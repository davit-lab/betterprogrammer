export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  if (req.method === "OPTIONS") return res.status(200).end()
  if (req.method !== "POST") return res.status(405).send("Method not allowed")

  const { to, subject, html } = req.body || {}
  if (!to || !subject || !html) return res.status(400).send("Missing fields")

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "BetterProgrammer <onboarding@resend.dev>",
      to: Array.isArray(to) ? to : [to],
      subject,
      html
    })
  })

  const text = await r.text()
  res.status(r.status).setHeader("Content-Type", "application/json").send(text)
}
