const supabaseUrl = 'https://qfthlhgajntgdprhiwdt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmdGhsaGdham50Z2Rwcmhpd2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2Mzg1NTMsImV4cCI6MTk3NTIxNDU1M30.uMyRqCP7wzm3RZbnWIauQSH1oK1bPeXORHPe6sPjmWA';

const client = supabase.createClient(supabaseUrl, supabaseKey);

export async function getCities() {
    const resp = await client.from('oregon_cities').select('*');
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}

export async function getCity(id) {
    const resp = await client.from('oregon_cities').select('*').match({ id }).single();
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    
    return resp.data;
}

export async function getStates() {
    const resp = await client.from('pnw-states').select('*');
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    
    return resp.data;
}