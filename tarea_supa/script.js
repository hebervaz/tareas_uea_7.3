const supabaseClient = supabase.createClient("https://znylnrmsnuaqafdakafs.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpueWxucm1zbnVhcWFmZGFrYWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NjQyNzgsImV4cCI6MjA4MDQ0MDI3OH0.0OI0kkhdeTnWJHD-WlsbITl5dLH1m1i0ZP4lToyaU4Y",{
    db: {schema: "public"}
}
);

(async () => {
const response = await supabaseClient.from("fechas_importantes").
select("año, evento")
console.log (response)
document.getElementById("fechas").innerHTML = JSON.stringify(response, null, 2)
})()