import { NextApiRequest, NextApiResponse } from 'next';

import dbconnect from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbconnect();

  switch (method) {
    case 'GET':
      try {
        const user = User.find({});
        res.status(200).json({ sucess: true, data: user });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ sucess: true, data: user });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
