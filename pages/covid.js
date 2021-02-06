import React from 'react'

import PageLayout from 'components/PageLayout'
import PageHeader from 'components/PageHeader'

function Covid() {
  const title = 'COVID-19'
  const subtitle = 'Safety Policies and Procedures'
  const intro =
    'In order to ensure the safety and well-being of our clients and staff, in conjunction with Acupuncture Wellness Connection, the following policies and procedures are in effect'

  return (
    <PageLayout>
      <PageHeader title={title} subtitle={subtitle} intro={intro} />
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-20 pb-12">
        <div className="my-6">
          <h2 className="font-semibold text-lg">Waiting Room</h2>
          <ul className="list-inside list-disc">
            <li>
              Hand sanitizer is located on the bookshelf for use when entering
              the office.
            </li>
            <li>
              The pillows on the couch are removed so everything can get wiped
              down.
            </li>
            <li>
              The bathroom, common areas, and handles will be wiped down
              regularly throughout the day.
            </li>
          </ul>
        </div>

        <div className="my-6">
          <h2 className="font-semibold text-lg">Treatment Rooms</h2>
          <ul className="list-inside list-disc">
            <li>All the linens are removed from the table</li>
            <li>
              Pillowcase covers and protective medical table paper are
              disposable and will be changed between each client.
            </li>
            <li>
              Vinyl pillow protector and vinyl table cover will be wiped down.
            </li>
            <li>
              Tables, chairs, cabinet doors and door handles will be wiped down
              between clients.
            </li>
            <li>
              Hepa filter with bacteria/virus killing UVC light in each
              treatment room.
            </li>
          </ul>
        </div>

        <div className="my-6">
          <h2 className="font-semibold text-lg">Payments</h2>
          <ul className="list-inside list-disc">
            <li>
              Credit cards can be securely stored in the Acuity scheduling
              system, so no contact is needed for credit card payments.
            </li>
            <li>Cash/checks are also still accepted as payment.</li>
          </ul>
        </div>

        <div className="my-6">
          <h2 className="font-semibold text-lg">Practitioner</h2>
          <ul className="list-inside list-disc">
            <li>
              Practitioner will be wearing a mask to follow CDC guidelines and
              government mandate.
            </li>
            <li>
              Practitioner will wash hands before entering the treatment room
              and immediately upon exiting, and will utilize hand sanitizer
              during the session as needed.
            </li>
            <li>
              Practitioner will have temperature taken and be screened for
              COVID-19 symptoms each day.
            </li>
          </ul>
        </div>

        <div className="my-6">
          <h2 className="font-semibold text-lg">Masks</h2>
          <ul className="list-inside list-disc">
            <li>
              Anyone entering the office is required to wear a mask as per
              government mandate.
            </li>
            <li>Disposable masks are available (while supplies last).</li>
          </ul>
        </div>

        <div className="my-6">
          <h2 className="font-semibold text-lg">Clients</h2>
          <ul className="list-inside list-disc">
            <li>
              When entering the office, please utilize the hand sanitizer on the
              bookshelf or wash your hands in the bathroom sink.
            </li>
            <li>
              If you have a temperature of 100 degrees or higher, or any signs
              of COVID-19, call or text to reschedule your appointment or switch
              to a virtual session. Do not come to the office.
            </li>
            <li>
              If you think you may have been exposed to someone with COVID-19,
              call or text to reschedule your appointment or switch to a virtual
              session. Do not come to the office.
            </li>
            <li>
              If you are at high risk, live with someone who is at high risk, or
              are in close contact with someone who is at high risk, please
              consider scheduling a virtual session instead.
            </li>
            <li>
              Your temperature will be taken and you will be required to answer
              brief COVID-19 screening questions at the beginning of each
              appointment.
            </li>
            <li>
              You will be required to sign the COVID-19 informed consent at your
              first in-office visit (Required one time only).
            </li>
          </ul>
        </div>

        <div className="my-6">
          <h2 className="font-semibold text-lg">Staggered Scheduling</h2>
          <ul className="list-inside list-disc">
            <li>
              The schedule is staggered so there is minimal overlap between
              clients in the waiting room.
            </li>
            <li>
              You will be taken back to my room as soon as possible after you
              arrive.
            </li>
            <li>
              If you prefer to text when you arrive, I will text you back when
              it is ok to come in.
            </li>
            <li>
              Please be patient as it may take a few extra minutes to get the
              rooms cleaned properly.
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export default Covid
