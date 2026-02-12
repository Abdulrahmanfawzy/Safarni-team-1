export const Title = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="text-[26px] text-[var(--text-primary-gray)] font-bold text-center">
        {title}
      </h1>
    </>
  );
};
