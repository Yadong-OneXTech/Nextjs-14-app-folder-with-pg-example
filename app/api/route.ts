import { Pool } from 'pg'

// replace it by env variables in different environments.
const connectionString = 'postgres://postgres.hchpzmmijzppyygjwqqg:NextjsV14-AppFolder-with-pg@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres'

const fetchData = async () => {
  const pool = new Pool({
      connectionString
  })

  const data  = await pool.query('SELECT NOW()')

  await pool.end()

  return data.rows
}

/**
 * @see more details: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */
export async function GET(request: Request, context: { params }) {
    const data = await fetchData()

    return Response.json({ data })
  }
  
