export function TemplateMoneyCard({
  cardTitle,
  mainInformation,
  currency,
  color,
}) {
  function SetMoneyCardTitle({ cardTitle }) {
    //TODO: write class
    return (
      <div className="flex w-full h-full justify-start font-bold text-lg ">
        <div className="flex ">{cardTitle}</div>
      </div>
    );
  }

  function SetMoneyCardMainInformation({ mainInformation }) {
    //TODO: write class
    return (
      <div className="flex grow text-xl justify-start w-full ">
        <div className="truncate text-4xl font-bold">{mainInformation}</div>
      </div>
    );
  }
  //max-h-44
  return (
    <div
      className={`flex flex-col w-1/4 p-3 grow justify-start rounded-3xl ${color} shadow-2xl select-none`}
    >
      <SetMoneyCardTitle cardTitle={`${cardTitle}`} />

      <SetMoneyCardMainInformation mainInformation={`${mainInformation}`} />

      <div className="flex flex-row w-full justify-end">
        <div className="flex justify-end text-2xl opacity-45 font-bold">
          {currency}
        </div>
      </div>
    </div>
  );
}

export function TemplateGraphic({ graphicTitle, mainInformation, color }) {
  function SetGraphicTitle({ graphicTitle }) {
    return <div>{graphicTitle}</div>;
  }

  function SetGraphicMainInformation({ mainInformation }) {
    return <div>{mainInformation}</div>;
  }

  return (
    <div
      className={`flex flex-col w-1/2 p-4 grow ${color} shadow-2xl select-none`}
    >
      <SetGraphicTitle graphicTitle={`${graphicTitle}`} />

      <SetGraphicMainInformation mainInformation={`${mainInformation}`} />
    </div>
  );
}
