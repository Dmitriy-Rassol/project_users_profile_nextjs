import Link from "next/link";
import "./usercard.scss";
import { User } from "@/interfaces/user.interface";

interface Iprops {
  user: User;
}

export const UserCard = ({ user }: Iprops): JSX.Element => {
  return (
    <div className="card-wrapper flex-container space-between">
      <div className="info-item flex-container column">
        <div>
          <span>ФИО:</span>
          {user.name}
        </div>
        <div>
          <span>Город:</span>
          {user.address.city}
        </div>
        <div>
          <span>Компания:</span>
          {user.company.name}{" "}
        </div>
      </div>
      <div>
        <Link className="card-link" href={`/profile/${user.id}`}>
          <span>Подробнее</span>
        </Link>
      </div>
    </div>
  );
};
