import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, CheckCircle, Building, Star } from "lucide-react";

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
}) {
  const getStatusColor = (status) => {
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
    <Card className="w-full mx-auto rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-shadow hover:shadow-lg">
      <CardHeader className="flex justify-between items-start pb-4 pt-6 px-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Certified Professional: {name}</p>
        </div>
        <Badge className={`${getStatusColor(status)} flex items-center gap-2 px-3 py-1.5 rounded-full font-medium`}>
          <CheckCircle className="h-4 w-4" />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </CardHeader>

      <CardContent className="px-6 pb-6 space-y-6">
        {/* Organization */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Building className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Organization</p>
            <p className="text-gray-800 dark:text-gray-100 font-medium">{organization}</p>
          </div>
        </div>

        {/* Obtained Date */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Obtained</p>
            <p className="text-gray-800 dark:text-gray-100 font-medium">{dateObtained}</p>
          </div>
        </div>

        {/* Certificate Code */}
        {certificateCode && (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Award className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Certificate Code</p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{certificateCode}</p>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Star className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
          </div>
          <p className="text-gray-800 dark:text-gray-100 leading-relaxed">{description}</p>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">Key Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Verification Link */}
        {verificationLink && (
          <a
            href={verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Verify Certification
          </a>
        )}
      </CardContent>
    </Card>
  );
}
