import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('DEX_SUPABASE_URL:', process.env.DEX_SUPABASE_URL);
  console.log('DEX_SUPABASE_SERVICE_ROLE_KEY:', process.env.DEX_SUPABASE_SERVICE_ROLE_KEY);

  if (!process.env.DEX_SUPABASE_URL || !process.env.DEX_SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'Missing Supabase environment variables' });
  }

  const supabase = createClient(
    process.env.DEX_SUPABASE_URL,
    process.env.DEX_SUPABASE_SERVICE_ROLE_KEY
  );

  const { data, error } = await supabase.from('db').select('*');

  if (error) {
    console.error('Supabase Error:', error);
    return res.status(500).json({ error: 'Failed to fetch data from Supabase' });
  }

  return res.status(200).json(data);
}