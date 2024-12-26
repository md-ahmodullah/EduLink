export default function FAQ() {
  return (
    <section className="bg-base-200 py-16 rounded-md">
      <div className="w-10/12 mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-5">
          FAQs: Your Questions Answered
        </h2>
        <p className="text-gray-400 text-center w-full md:w-4/5 mx-auto mb-14">
          Have questions about using our platform? Explore our Frequently Asked
          Questions to find quick and helpful answers about creating
          assignments, grading, progress tracking, and more. We are here to make
          your group-study experience seamless and productive!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How can I create an assignment on the platform?
              </div>
              <div className="collapse-content">
                <p>
                  To create an assignment, log in to your account, navigate to
                  the "Assignments" section, and click the "Create Assignment"
                  button. Fill in the required details like title, description,
                  and due date, then save it for your group to view.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can I grade assignments created by my friends?
              </div>
              <div className="collapse-content">
                <p>
                  Yes! You can grade assignments submitted by your friends.
                  Simply go to the "Submitted Assignments" section, select an
                  assignment, and provide marks and feedback.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Who can see my submitted assignments?
              </div>
              <div className="collapse-content">
                <p>
                  Only your registered friends on the platform can view and
                  grade your submitted assignments. This ensures a collaborative
                  and private group-study experience.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What should I do if I encounter a technical issue?
              </div>
              <div className="collapse-content">
                <p>
                  If you experience any issues, navigate to the "Support"
                  section of the website and submit your query. Our team will
                  assist you promptly to ensure a smooth experience.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Is there a way to track my assignment progress?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely! You can track your assignment progress under the
                  "My Assignments" tab. It shows your completed, pending, and
                  graded assignments for better organization.
                </p>
              </div>
            </div>
          </div>
          <div className="join join-vertical w-full items-center lg:items-end">
            <div>
              <img
                src="https://i.ibb.co.com/WpymQQw/faq-removebg-preview.png"
                alt="faq"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
