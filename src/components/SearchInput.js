import { Input } from "reactstrap"

export const SearchInput = (props) => {

  return (
    <div>
      <Input
        bsSize="lg"
        placeholder="Vyhledat recept.."
        {...props}
      />
    </div>
  );
}
