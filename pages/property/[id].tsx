import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection"
import BookingSection from "@/components/property/BookingSection"
import { SampleReviews } from "@/constants/reviews";


export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === Number(id));
   const propertyReviews = SampleReviews.filter((reviews)=>reviews.propertyId ===Number(id))


  if (!property) return <p>Property not found</p>;

 
  return (
    <div>
      <div>
        <PropertyDetail property={property} />
      </div>

      <div>
        <BookingSection  price ={property.price} />
      </div>

      <div>
        <ReviewSection reviews={propertyReviews} />
      </div>
    </div>
  );
}