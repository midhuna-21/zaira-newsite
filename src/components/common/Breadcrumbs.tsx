import Link from "next/link";

interface StyleType {
  page: string;      // will hold category always
  style: boolean;    // your existing style logic
  title?: string;    // optional for detail pages
}

const Breadcrumbs = ({ page, style, title }: StyleType) => {
  return (
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>

                  {/* Always show page (category) */}
                  <li
                    className={`breadcrumb-item ${style ? "" : "active"}`}
                    aria-current="page"
                  >
                    {page}
                  </li>

                  {/* Show title only if passed (detail page) */}
                  {title && (
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      {title}
                    </li>
                  )}

                  {/* Your original style logic stays untouched */}
                  {style && !title && (
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Smashing Podcast Episode 58 With Debbie What Is CX Design?
                    </li>
                  )}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
