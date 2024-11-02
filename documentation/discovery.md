# Talent Sage Discovery

Books musical bands into night clubs.

Talent agent needs a web app to track the transactions for booking musical bands into night clubs.

Club manager wants to know which bands are available on a certain date at a
certain time or wants to know the agents fee for a certain band.

The agent may need to see a list of band members and the instruments each person plays or a list of all bands that have three members.

## After talking to agent (domain expert)

1. A booking is an event in which a certain band plays in a particular club on a particular date,
starting and ending at certain times and performing for a specific fee. A band can play more than
once a day. The Heartbreakers, for example, could play at the East End Cafe in the afternoon and
then at the West End Cafe on the same night. For each booking, the club pays the talent agent.
The agent keeps a 5 percent fee and then gives the remainder of the payment to the band.

2. Each band has at least two members and an unlimited maximum number of members. The agent
notes a telephone number of just one band member, which is used as the band’s contact number.
No two bands have the same name or telephone number.

3. Band member names are not unique. For example, two bands could each have a member named
Sally Smith.

4. The agent keeps track of just one instrument that each band member plays.

5. Each band has a desired fee. For example, the Lightmetal band might want $700 per booking and
would expect the agent to try to get at least that amount.

6. Each nightclub has a name, an address, and a contact person. The contact person has a telephone number that the agent uses to call the club. No two clubs have the same name, contact
person, or telephone number. Each club has a target fee. The contact person will try to get the
agent to accept that fee for a band’s appearance.

7. Some clubs feed the band members for free; others do not.