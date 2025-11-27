export default async function Page() {
  const res = await fetch(`${process.env.STRAPI_API_URL}/miembros`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div>
      <h1>Datos de Strapi</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
