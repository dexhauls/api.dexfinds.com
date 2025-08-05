import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.DEX_SUPABASE_URL!,
  process.env.DEX_SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.from('db').select('*');

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }

  res.status(200).json(data);
}
