interface IPageDescription {
  heading: string;
  subHeading: string;
}
const PageDescription = ({ heading, subHeading }: IPageDescription) => (
  <div className='ml-6 mt-10'>
    <h1 className='font-bold text-3xl'>{heading}</h1>
    <h3 className='font-bold text-l'>{subHeading}</h3>
  </div>
);

export default PageDescription;
