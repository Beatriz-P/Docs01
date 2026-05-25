function VersionTabs({ version }) {
  const items = versiones[version];

  if (!items) {
    return <p>Versión no encontrada</p>;
  }

  return (
    <details>
      <summary>Versión {version}</summary>

      <Tabs className="tabs-practicas">

        {items.map((item, index) => (
          <TabItem
            key={index}
            value={item.label}
            label={item.label}
          >
            <ImageZoom
              src={item.src}
              alt={item.label}
              thumbWidth={250}
            />
          </TabItem>
        ))}

      </Tabs>
    </details>
  );
}