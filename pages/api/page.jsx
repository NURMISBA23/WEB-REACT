import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('your-database-name');

      const { name, type, price, address, bedrooms, bathrooms, description } = req.body;

      const newProperty = {
        name,
        type,
        price,
        address,
        bedrooms,
        bathrooms,
        description,
      };

      await db.collection('properties').insertOne(newProperty);

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add property' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
