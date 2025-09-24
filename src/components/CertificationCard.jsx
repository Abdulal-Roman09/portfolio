import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle,
  Building,
  Star,
  Clock,
  Laptop,
} from "lucide-react";

export function CertificationCard({
  name = "Abdul Al Roman",
  title,
  organization,
  dateObtained,
  certificateCode,
  description,
  verificationLink,
  skills = [],
  status = "active",
  image,
  duration,
  mode,
}) {
  const getStatusClasses = (status) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300";
      case "pending":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300";
    }
  };

  return (
    <div className="w-full mx-auto rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-shadow hover:shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start p-6 border-b border-gray-200 dark:border-gray-700">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Certified Professional: {name}
          </p>
        </div>
        <span
          className={`${getStatusClasses(
            status
          )} flex items-center gap-2 px-3 py-1.5 rounded-full font-medium`}
        >
          <CheckCircle className="h-4 w-4" />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div>
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Content 40% */}
            <div className="md:w-2/5 space-y-6">
              {/* Organization */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Building className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                    Organization
                  </p>
                  <p className="text-gray-800 dark:text-gray-100 font-medium">
                    {organization}
                  </p>
                </div>
              </div>

              {/* Obtained Date */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                    Obtained
                  </p>
                  <p className="text-gray-800 dark:text-gray-100 font-medium">
                    {dateObtained}
                  </p>
                </div>
              </div>

              {/* Certificate Code */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Award className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                    Certificate Code
                  </p>
                  <p className="text-gray-800 dark:text-gray-100 font-medium">
                    {certificateCode}
                  </p>
                </div>
              </div>
              {/* Duration */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <Clock className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                    Duration
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-100">
                    {duration}
                  </p>
                </div>
              </div>

              {/* Mode */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <Laptop className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                    Mode
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-100">
                    {mode}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 60% */}
            <div className="md:w-3/5 h-60 md:h-72 lg:h-72 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 mt-6 md:mt-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-95"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Star className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
            </div>
            <p className="text-gray-800 dark:text-gray-100 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">
                Key Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Verification Link */}

          <a
            href={verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Verify Certification
          </a>
        </div>
      </div>
    </div>
  );
}
