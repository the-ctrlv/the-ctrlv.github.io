export default async function handler(req, res) {
  const { data } = req.body;

  const result = await fetch(
    'https://jnbyi7sqrc.execute-api.us-west-2.amazonaws.com/default/contact-us-email-sender',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    }
  );

  const responseData = await result.json();

  if (responseData.errors) {
    return res.status(500).json({ error: responseData.message });
  }

  return res.status(201).json({ responseData });
}
