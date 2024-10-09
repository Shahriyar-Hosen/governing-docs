/* eslint-disable react/prop-types */
export const ProblemSolutionCard = ({ image, title, des1, des2 }) => (
  <div className="transition-colors duration-200 w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 shadow-card hover:bg-primary group">
    <div className="bg-primary size-[58px] rounded-full flex justify-center items-center">
      <img src={image} alt={title} />
    </div>
    <h1 className="font-bold group-hover:text-white text-lg text-secondary leading-none">
      {title}
    </h1>
    <div className="text-accent space-y-2.5 group-hover:text-white">
      <p>{des1}</p>
      {des2 && <p>{des2}</p>}
    </div>
  </div>
);
