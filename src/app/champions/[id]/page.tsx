type Props = {
  params: {
    id: string;
  };
};

const ChampionDetail = async ({ params }: Props) => {
  return <div>{params.id}</div>;
};


export default ChampionDetail