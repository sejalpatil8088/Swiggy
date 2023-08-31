

const withPromotedLabel = (WrappedComponent) => {
  return ({ resData }) => (
    <div className="relative">
      {resData.data.promoted && (
        <div className="absolute top-0 left-0 bg-yellow-500 text-white p-2 rounded-tl-md rounded-br-md">
          Promoted
        </div>
      )}
      <WrappedComponent resData={resData} />
    </div>
  );
};

export default withPromotedLabel;
