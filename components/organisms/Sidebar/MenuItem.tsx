import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transaction"
    | "ic-menu-message"
    | "ic-menu-card"
    | "ic-menu-reward"
    | "ic-menu-setting"
    | "ic-menu-logout";
  active?: boolean;
<<<<<<< HEAD
  href: string

}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href  } = props;
=======
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props;
>>>>>>> 8663a6e3374acfc741a64835732ba2aff3de49b1
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
<<<<<<< HEAD
    
      <Link href={href || ""} className="text-lg text-decoration-none"> {title}
        </Link>
        
         
        </p>
      </div>
=======
        <Link href={href || ""} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
>>>>>>> 8663a6e3374acfc741a64835732ba2aff3de49b1
  );
}
