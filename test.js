import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://fraavquryucdpnddehbd.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYWF2cXVyeXVjZHBuZGRlaGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxMDIwNDYsImV4cCI6MjEwMzY3ODA0Nn0.ESynrrW2G-wzIARgNCMaJMJVdE4uO7du9lhBHbQQWVo'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function testConnection() {
    const { data, error } = await supabase
        .from('test')
        .select('*')

    if (error) {
        console.log('Connection/database error:')
        console.log(error)
        return
    }

    console.log('Connected to Supabase!')
    console.log(data)
}

testConnection()