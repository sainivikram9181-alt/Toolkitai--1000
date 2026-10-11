import { createClient } from '@supabase/supabase-js'

export default async function sitemap() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data: tools } = await supabase.from('tools').select('id').limit(1000)
  return [
    { url: 'https://toolkitai.in', lastModified: new Date() },
    ...(tools || []).map((t:any) => ({
      url: `https://toolkitai.in/tool/${t.id}`,
      lastModified: new Date(),
    }))
  ]
}
