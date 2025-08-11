import React from 'react'

const Education = () => {
  return (
     <div className=" bg-background">
      <div className="container mx-auto  py-10 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Education</h1>
          <p className="text-muted-foreground text-lg">My academic journey and qualifications</p>
        </div>

        <div className="space-y-8">
          {/* Current Education */}
          <div className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Engineering (BSc  Engineering)</h3>
                <p className="text-muted-foreground mb-2">Computer Science & Engineering</p>
                <p className="text-sm text-muted-foreground">Currently Pursuing</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  In Progress
                </span>
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm text-muted-foreground">
                Pursuing a comprehensive degree in Computer Science & Engineering, focusing on software development,
                algorithms, data structures, and modern programming technologies.
              </p>
            </div>
          </div>

          {/* Completed Education */}
          <div className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Higher Secondary Certificate (HSC)</h3>
                <p className="text-muted-foreground mb-2">Science Group</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Completed
                </span>
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm text-muted-foreground">
                Successfully completed Higher Secondary Certificate with focus on Science subjects, building a strong
                foundation in mathematics, physics, and analytical thinking.
              </p>
            </div>
          </div>

        

          {/* Academic Goals */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-3">Academic Goals</h3>
            <p className="text-muted-foreground">
              Currently working towards completing my BSc Engineering degree in Computer Science, with a focus on
              full-stack development, software engineering principles, and emerging technologies. Committed to
              continuous learning and staying updated with industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
