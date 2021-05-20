
import "./IngredientCard.scss";

export default function IngredientCard({
  ingredientName,
  ingredientId,
  calories,
  carbs,
  proteins,
  fat,
  intolerances,
  picture,
}) {
  return (
    <div className="ingredientCard" key={ingredientId}>
      <div className="ingredientCard_header">
        <div className="ingredientCard_header_name">
          <p>{ingredientName}</p>
        </div>
        <div className="ingredientCard_header_calories">
          <p>{calories} Calories per 100grs</p>
        </div>
      </div>
      <div className="ingredientCard_picture">
        <img src={picture} alt={ingredientName} />
      </div>
      <div className="ingredientCard_info">
        <div className="ingredientCard_info_item">
          <p className="ingredientCard_info_item_title">Carbs:</p>
          <p className="ingredientCard_info_item_data">{carbs}per 100grs</p>
          <p className="ingredientCard_info_item_title">Proteins</p>
        <p className="ingredientCard_info_item_data">{proteins}per 100grs</p>
        </div>
      <div className="ingredientCard_info_item">
        <p className="ingredientCard_info_item_title">Fat</p>
        <p className="ingredientCard_info_item_data">{fat} per 100grs</p>
        <p className="ingredientCard_info_item_title">Intolerances: </p>
        <p className="ingredientCard_info_item_data">{intolerances}</p>
      </div>
      </div>
    </div>
  );
}
