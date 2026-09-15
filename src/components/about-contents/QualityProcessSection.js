const serviceCards = [
  {
    id: 1,
    title: "Clarity",
    description:
      "Clear tools to help you make informed decisions.",
  },
  {
    id: 2,
    title: "Trust",
    description:
      "Transparent pricing and honest practices.",
  },
  {
    id: 3,
    title: "Education",
    description:
      "Helping beginners become confident traders.",
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "Smart technology for better trading.",
  },
  {
    id: 5,
    title: "Community",
    description:
      "A supportive space for all traders.",
  },
  {
    id: 6,
    title: "Excellence",
    description:
      "Constantly improving for the best experience.",
  },
];

const QualityProcessSection = () => {
  return (
    <section className="quality-section-about">
      <div className="quality-header-about">
        <h1>Our Values</h1>
        <p>
          We make trading simple, transparent, and accessible for everyone.
        </p>
      </div>

      <div className="container">
        <table className="quality-table">
          <tbody>
            {serviceCards
              .reduce((rows, card, index) => {
                if (index % 2 === 0) rows.push([card]);
                else rows[rows.length - 1].push(card);
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((card) => (
                    <td key={card.id}>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </td>
                  ))}
                  {row.length < 2 && <td></td>} {/* for even layout */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default QualityProcessSection;
